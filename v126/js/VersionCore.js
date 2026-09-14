
class VersionCore {
    static info = {"number": "126", "hash": "6AAEF7"};
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
