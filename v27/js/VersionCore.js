
class VersionCore {
    static info = {"number": "27", "hash": "965202"};
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
