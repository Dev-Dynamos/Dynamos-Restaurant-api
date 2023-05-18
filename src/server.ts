import { app } from ".";

const PORT = process.env.PORT || 4444

app.listen(PORT, () => console.log('server listening on 4444'))