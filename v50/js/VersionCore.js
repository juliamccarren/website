
class VersionCore {
    static info = {"number": "50", "hash": "1F0149"};
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
