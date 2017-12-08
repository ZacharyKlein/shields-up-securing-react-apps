package demo

import grails.testing.gorm.DomainUnitTest
import spock.lang.Specification

class ModelSpec extends Specification implements DomainUnitTest<Model> {

    def setup() {
    }

    def cleanup() {
    }

    void "test something"() {
        expect:"fix me"
            true == false
    }
}
