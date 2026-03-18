
class VersionCore {
    static info = {"number": "56", "hash": "60CC7C"};
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
