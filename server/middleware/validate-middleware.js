const validate = (schema) => async (req, res, next) => {
    try {
        const parseBody = await schema.parseAsync(req.body);
        req.body = parseBody;
        next();
    } catch (err) {
        const status = 422;
        const message = "Fill the input properly";
        // res.status(400).json({msg: message});
        // console.log(err);
        const extraDetails = err.errors[0].message;
        // console.log(extraDetails)
        const error = {
            status,
            message,
            extraDetails
        }
        next(error);
    }
}

export default validate;