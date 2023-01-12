import axios from "axios";

export default async function (req, res) {

    const method = req.method;

    switch (method) {
        case 'GET':
            const gifs = await obtenerGifs();
            return res.status(200).json(gifs)
        case 'POST':
            return await insertarGif(req, res);
        case 'DELETE':
            return await deleteGif(req, res);

    }

    return res.status(400).json({ message: 'method not allow' })
}


async function obtenerGifs() {
    const { data } = await axios.get('https://iyelrnlkoq7ra5mnxg5cobbkta0uubul.lambda-url.us-east-1.on.aws/?author_id=2004');
    return data;
}

async function insertarGif(req, res) {
    try {
        await axios.post('https://iyelrnlkoq7ra5mnxg5cobbkta0uubul.lambda-url.us-east-1.on.aws/', req.body)
        return res.status(200).json({ status: 200, message: "registrado" })
    } catch (error) {
        return res.status(400).json({ status: 400, message: "no registrado" })
    }
}

async function deleteGif(req, res) {
    try {

        await axios.delete('https://iyelrnlkoq7ra5mnxg5cobbkta0uubul.lambda-url.us-east-1.on.aws/', { data: req.body })
        return res.status(200).json({ status: 200, message: "eliminado" })
    } catch (error) {
        return res.status(400).json({ status: 400, message: "no eliminado" })
    }
}