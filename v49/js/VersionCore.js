
class VersionCore {
    static info = {"number": "49", "hash": "3756EC"};
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
