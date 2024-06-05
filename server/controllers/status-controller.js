import { isDBConnected } from "../utils/db.js";

export const status = async (req, res) => {
    // console.log(isDBConnected);
    if(isDBConnected) {
        res.status(200).json({ statusText: 'ok' });
    } else {
        res.status(503).json({ statusText: 'error' });
    }
}