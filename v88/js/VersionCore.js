
class VersionCore {
    static info = {"number": "88", "hash": "1E5FCB"};
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
