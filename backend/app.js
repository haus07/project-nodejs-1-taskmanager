const express = require('express');
const app = express();
const connectDB = require('./db/connect');
const PORT = process.env.PORT || 2004;
const TaskRoutes = require('./routes/task.route');
const cors = require('cors');


app.use(cors());
//middleware
app.use(express.json());

//routes task
app.use('/task', TaskRoutes);

const startServer = async () => {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(`Server is running on PORT ${PORT}`);   
        });
    } catch (error) {
        console.error("Cant connect",error.message);
    }
};


startServer();