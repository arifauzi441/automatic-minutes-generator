const path = require("path")
const summarization = require("../model/summarizationModel")
const crypto = require("crypto")
const ffmpeg = require("fluent-ffmpeg")

function convertVideoToAudio(videoPath, audioPath) {

    return new Promise((resolve, reject) => {
        ffmpeg(videoPath)
            .noVideo()
            .audioCodec("pcm_s16le")
            .format("wav")
            .on("end", () => resolve(audioPath))
            .on("error", (err) => reject(err))
            .save(audioPath)
    })
}

const getData = async (req, res, next) => {
    try {
        let data = await summarization.findAll()

        return res.status(200).json({ msg: "Berhasil mengambil data", data })
    } catch (error) {
        res.status(401).json({ msg: "terjadi kesalahan pada fungsi" })
        console.log(error)
    }
}

const getVideo = async (req, res, next) => {
    try {
        let token = req.params.token
        let data = await summarization.findOne({ where: { token } })
        if (!data) return res.status(401).json({ msg: "Data tidak ditemukan" })

        return res.status(200).sendFile(path.resolve(data.file_path))
    } catch (error) {
        res.status(401).json({ msg: "terjadi kesalahan pada fungsi" })
        console.log(error)
    }
}

const processVideoController = async (req, res, next) => {
    try {
        if (!req.file) return res.status(401).json({ msg: "Video harus diinputkan" })

        const token = crypto.randomBytes(32).toString("hex")
        const file_path = `uploads/videos/${req.file.filename}`
        const audioName = Date.now() + ".wav"
        const audioPath = path.join("temp/audio", audioName)

        await summarization.create({
            token,
            status: "processing",
            file_path
        })

        await convertVideoToAudio(file_path, audioPath)

        res.status(200).json({ msg: "Berhasil menginputkan data" })

    } catch (error) {
        res.status(401).json({ msg: "terjadi kesalahan pada fungsi" })
        console.log(error)
    }
}

module.exports = { getData, getVideo, processVideoController }