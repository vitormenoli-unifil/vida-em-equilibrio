import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  senha: { type: String, required: true },
  foto: { type: String },
  sobreMim: { type: String, maxlength: 54 },
});

export default mongoose.model('User', UserSchema);
