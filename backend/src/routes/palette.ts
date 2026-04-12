import { Router } from 'express';
import pool from '../db';

const router = Router();

router.post('/', async (req, res) => {
    const { company } = req.body;

    if (!company) {
        return res.status(400).json({ error: 'Company name is required' });
    }

    try {
        // cache check
        const cached = await pool.query(
            'SELECT * FROM palettes WHERE LOWER(company) = LOWER($1)',
            [company]
        );

        if (cached.rows.length > 0) {
            return res.json({ source: 'cache', palette: cached.rows[0] });
        }

        //api call
        res.json({ source: 'miss', message: 'No palette found, LLM call goes here' });

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

export default router;