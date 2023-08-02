

class Manipulation {
    getPastProperties(object: any) {
        const onlyProperties = Object.entries(object).filter((value) => value);
        const convertInObject = Object.fromEntries(onlyProperties);

        return convertInObject;
    }
}

const manipulation = new Manipulation();

export { manipulation }