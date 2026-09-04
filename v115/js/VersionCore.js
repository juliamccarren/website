
class VersionCore {
    static info = {"number": "115", "hash": "4C24B4"};
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
