const { pool } = require('../database')

exports.getAllDonations = async(req,res)=>{
    try {
        
        let donations =await  pool.query
        (
            `select * from donations;`
        )

        res.status(200).json({
            status:'success',
            data: donations.rows
        })

    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err.message
        })
    }
}

exports.createDonation = async(req,res)=>{
    try {
        let donor = req.user;
        let causeId = req.body.causeId
        let amt = req.body.amount
          
        let data = await pool.query(
            `INSERT INTO donations(cause_id,user_id , amount) VALUES($1,$2,$3) RETURNING *;`,
            [causeId,donor.user_id,amt]
        )

        res.status(200).json({
            status:'success',
            data:data.rows
        })

    } catch (err) {
        console.log(err)
        res.status(400).json({
            status: 'fail',
            message: err.message
        })
    }
}