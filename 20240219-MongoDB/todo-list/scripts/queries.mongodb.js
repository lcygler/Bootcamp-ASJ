// List tasks
use("bootcamp-asj");
db.tasks.find({});

// Count tasks
use("bootcamp-asj");
db.tasks.find({}).count();

// Find completed tasks
use("bootcamp-asj");
db.tasks.find({
  done: true,
});

// Find incomplete tasks
use("bootcamp-asj");
db.tasks.find({
  done: false,
});

// Find active tasks
use("bootcamp-asj");
db.tasks.find({
  deleted: false,
});

// Find inactive tasks
use("bootcamp-asj");
db.tasks.find({
  deleted: true,
});
