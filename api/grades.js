export default (mongoose) => {
  const GradeSchema = mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    value: {
      type: Number,
      required: true,
    },
    lastModified: {
      type: Date,
      required: true,
      default: Date.now(),
    },
  });

  return mongoose.model("grade", GradeSchema);
};
