
class VersionCore {
    static info = {"number": "159", "hash": "65F931"};
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
