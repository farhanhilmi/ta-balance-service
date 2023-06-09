import mongoose from 'mongoose';

export const toObjectId = (id) => {
    return new mongoose.Types.ObjectId(id);
};

export const toTitleCase = (str) => {
    return str
        .split(' ')
        .map((w) => w[0].toUpperCase() + w.substring(1).toLowerCase())
        .join(' ');
};
