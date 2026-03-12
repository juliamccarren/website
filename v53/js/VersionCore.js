
class VersionCore {
    static info = {"number": "53", "hash": "FD4A12"};
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
