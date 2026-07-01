
class VersionCore {
    static info = {"number": "95", "hash": "0D55AE"};
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
