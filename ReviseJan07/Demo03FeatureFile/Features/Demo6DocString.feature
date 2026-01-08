Feature: Check doc string approach

  Scenario: Demo test the approach
    Given User has a JSON data """{"name":"Aman","age":3000}"""
    When user gets data in XML """<Envelope><firstName>Aman</firstName><lastName>Aman</lastName></Envelope>"""
