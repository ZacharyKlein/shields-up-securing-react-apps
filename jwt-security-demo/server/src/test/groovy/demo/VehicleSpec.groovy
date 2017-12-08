package demo

import grails.testing.gorm.DomainUnitTest
import spock.lang.Specification

class VehicleSpec extends Specification implements DomainUnitTest<Vehicle> {

    def setup() {
    }

    def cleanup() {
    }

    void "test something"() {
        expect:"fix me"
            true == false
    }
}
