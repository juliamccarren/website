
class VersionCore {
    static info = {"number": "83", "hash": "458F30"};
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
