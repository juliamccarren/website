
class VersionCore {
    static info = {"number": "94", "hash": "31826E"};
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
