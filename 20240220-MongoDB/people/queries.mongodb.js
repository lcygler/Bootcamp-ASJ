use("bootcamp-asj");

db.people.find({
  $and: [
    {
      $or: [{ apellido: { $regex: /h/i } }, { email: { $not: { $regex: /x/i } } }],
    },
    { talle: { $in: ["M", "S"] } },
    { edad: { $lte: 30 } },
    { fec_nac: { $regex: /^(0[1-2])\/01/ } },
  ],
});
