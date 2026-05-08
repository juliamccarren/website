
class VersionCore {
    static info = {"number": "71", "hash": "0BEEB6"};
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
