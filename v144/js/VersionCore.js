
class VersionCore {
    static info = {"number": "144", "hash": "99542D"};
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
