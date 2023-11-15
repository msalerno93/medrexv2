import mongoose from "mongoose";

const InsuranceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 3,
    max: 30,
  },
  address: {
    street: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    zipcode: {
      type: String,
      required: true,
    },
  },
  contactInfo: {
    phone: {
        type: String,
        required: true
    },
    fax: {
        type: String,
        required: true
    }
  }
});


const Insurance = mongoose.model("Insurance", InsuranceSchema)
export default Insurance