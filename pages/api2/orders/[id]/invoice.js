import nextConnect from "next-connect";
import { onError } from "../../../../middleware/errors";
import Order from '../../../../models/Order';
import User from '../../../../models/User';
import PDFDocument from '../../../../utils/pdfTable';
import dbConnect from "../../../../config/dbConnect";

const handler = nextConnect({
    onError,
});

dbConnect()


handler.get(async (req, res) => {
 
  await User.find({});
  const order = await Order.findById(req.query.id).populate('user');
  
  if (order) {
    const doc = new PDFDocument({ bufferPages: true });

    const buffers = [];

    doc.on('data', buffers.push.bind(buffers));
    doc.on('end', () => {
      const pdfData = Buffer.concat(buffers);
      res
        .writeHead(200, {
          'Content-Length': Buffer.byteLength(pdfData),
          'Content-Type': 'application/pdf',
          'Content-disposition': `attachment;filename=order-${order._id}.pdf`,
        })
        .end(pdfData);
    });

    doc.font('Times-Roman').fontSize(12).text(`ORDER ${order._id}`, {
      width: 410,
      align: 'center',
    });
    doc.moveDown();
    doc.font('Times-Roman').fontSize(12).text(`Customer: ${order.user.name}`, {
      width: 410,
      align: 'left',
    });
    doc
      .font('Times-Roman')
      .fontSize(12)
      .text(`Date: ${order.createdAt.toString().substring(0, 15)}`, {
        width: 410,
        align: 'right',
      });

    doc.moveDown();
    const orderItemsRows = order.orderItems.map((item) => [
      item.name,
      item.price,
      item.quantity,
      item.quantity * item.price,
    ]);
    const rows = {
      headers: ['Name', 'Price', 'Qty', 'SubTotal'],
      rows: orderItemsRows,
      footers: [
        ['', '', 'Items Price', order.itemsPrice],
        ['', '', 'Tax Price', order.taxPrice],
        ['', '', 'Shipping Price', order.shippingPrice],
        ['', '', 'Total Price', order.totalPrice],
      ],
    };

    doc.table(rows, {
      prepareHeader: () => doc.font('Helvetica-Bold'),
      prepareRow: (row, i) => doc.font('Helvetica').fontSize(12),
    });
    doc.end();
    
  } else {
    
    res.status(404).send(order.user.name);
  }

})

export default handler;