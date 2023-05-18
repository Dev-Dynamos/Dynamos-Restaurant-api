import { app } from "."

const PORT = process.env.PORT || 4444;

app.listen(PORT, () => console.log('server is running!! 🤑🤑 ', PORT));