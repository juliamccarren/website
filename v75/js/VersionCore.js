
class VersionCore {
    static info = {"number": "75", "hash": "9A9B06"};
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
