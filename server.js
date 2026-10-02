const express = require('express');
const cors = require('cors');
const axios = require('axios');
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors({
	origin: 'http://localhost:3000'
}));

app.use('/api', async (req, res) => {
	try {
		const _params = {
			"country_code": "US",
			"address_purpose": "PRIMARY",
			"limit": "200",
			"version": "2.1"
		}
		var tmp = new URLSearchParams(req.query);
		Object.keys(_params).forEach((key) => tmp.append( key, _params[key] ));
		const params = tmp;
		
		const NPIres = await axios.get('https://npiregistry.cms.hhs.gov/api', {params});
		res.status(200).json(NPIres.data);
		//res.status(200).json(NPIres.data["results"]);
	} catch (error) {
		res.status(500).json({ error: 'Failed to fetch the data.' });
	}
})

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000, () => console.log('NPI application running at 127.0.0.1:3000'));
