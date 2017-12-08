package demo

import grails.testing.gorm.DomainUnitTest
import spock.lang.Specification

class DriverSpec extends Specification implements DomainUnitTest<Driver> {

    def setup() {
    }

    def cleanup() {
    }

    void "test something"() {
        expect:"fix me"
            true == false
    }
}
