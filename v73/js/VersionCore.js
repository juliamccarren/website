
class VersionCore {
    static info = {"number": "73", "hash": "2BE77D"};
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
