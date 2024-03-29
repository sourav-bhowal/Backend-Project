import mongoose from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new mongoose.Schema({
    videoFile: {
        type: {
            url: String,
            public_id: String,
        },   // cloudinary url for videofile
        required: [true, "VideoFile is required."],
    },
    thumbnail: {
        type: {
            url: String,
            public_id: String,
        },   // cloudinary url for videofile
        required: [true, "Thumbnail is required."],
    },
    title: {
        type: String,
        required: [true, "Title is required."],
    },
    description: {
        type: String,
        required: [true, "Description is required."],
    },
    duration: {
        type: Number,   // cloudinary url
        required: true,
    },
    views: {
        type: Number,
        default: 0,
    },
    isPublished: {
        type: Boolean,
        default: true,
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }
}, {timestamps: true});


videoSchema.plugin(mongooseAggregatePaginate);  // for aggregate queries

export const Video = mongoose.model("Video", videoSchema);