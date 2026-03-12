
class VersionCore {
    static info = {"number": "54", "hash": "A441B4"};
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
