
class VersionCore {
    static info = {"number": "34", "hash": "A14D7F"};
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
