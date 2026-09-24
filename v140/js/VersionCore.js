
class VersionCore {
    static info = {"number": "140", "hash": "5FF181"};
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
