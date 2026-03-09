
class VersionCore {
    static info = {"number": "44", "hash": "86636E"};
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
