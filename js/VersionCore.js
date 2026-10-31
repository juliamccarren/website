
class VersionCore {
    static info = {"number": "149", "hash": "870109"};
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
