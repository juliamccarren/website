
class VersionCore {
    static info = {"number": "114", "hash": "0171A8"};
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
