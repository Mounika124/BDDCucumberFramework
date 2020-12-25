$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/AddItemsAndSortItems.feature");
formatter.feature({
  "line": 2,
  "name": "Add items to wish list and sort items",
  "description": "",
  "id": "add-items-to-wish-list-and-sort-items",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Amazon"
    }
  ]
});
formatter.scenarioOutline({
  "line": 8,
  "name": "Add an item to wish list",
  "description": "",
  "id": "add-items-to-wish-list-and-sort-items;add-an-item-to-wish-list",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@AddItemToWishList"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User search for an item with \"\u003cproductName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Verify the product name",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Options available for the product",
  "keyword": "And "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "add-items-to-wish-list-and-sort-items;add-an-item-to-wish-list;",
  "rows": [
    {
      "cells": [
        "productName"
      ],
      "line": 13,
      "id": "add-items-to-wish-list-and-sort-items;add-an-item-to-wish-list;;1"
    },
    {
      "cells": [
        "Samsung"
      ],
      "line": 14,
      "id": "add-items-to-wish-list-and-sort-items;add-an-item-to-wish-list;;2"
    },
    {
      "cells": [
        "OnePlus"
      ],
      "line": 15,
      "id": "add-items-to-wish-list-and-sort-items;add-an-item-to-wish-list;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 11549505600,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "User is on  amazon home page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on home page",
  "keyword": "Given "
});
formatter.match({
  "location": "SearchItemAndLanguageChangingStepDef.userIsOnHomePage()"
});
formatter.result({
  "duration": 1059161400,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Add an item to wish list",
  "description": "",
  "id": "add-items-to-wish-list-and-sort-items;add-an-item-to-wish-list;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Amazon"
    },
    {
      "line": 7,
      "name": "@AddItemToWishList"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User search for an item with \"Samsung\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Verify the product name",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Options available for the product",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Samsung",
      "offset": 30
    }
  ],
  "location": "AddItemsAndSortItemsStepDef.userSearchForAnItemWith(String)"
});
formatter.result({
  "duration": 11109833500,
  "status": "passed"
});
formatter.match({
  "location": "AddItemsAndSortItemsStepDef.verifyTheProductName()"
});
formatter.result({
  "duration": 14460809600,
  "status": "passed"
});
formatter.match({
  "location": "AddItemsAndSortItemsStepDef.optionsAvailableForTheProduct()"
});
formatter.result({
  "duration": 90667945800,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for element to be clickable: Proxy element for: DefaultElementLocator \u0027By.cssSelector: div[class\u003d\u0027a-column a-span3 a-text-center icon-container ncd-icon a-declarative\u0027]\u0027 (tried for 90 second(s) with 500 MILLISECONDS interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:80)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:232)\r\n\tat automation.utilities.Utils.elementWait(Utils.java:1320)\r\n\tat automation.stepdefinitions.AddItemsAndSortItemsStepDef.optionsAvailableForTheProduct(AddItemsAndSortItemsStepDef.java:93)\r\n\tat ✽.And Options available for the product(features/AddItemsAndSortItems.feature:11)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"div[class\u003d\u0027a-column a-span3 a-text-center icon-container ncd-icon a-declarative\u0027]\"}\n  (Session info: chrome\u003d87.0.4280.88)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027DESKTOP-LN9R7IR\u0027, ip: \u0027192.168.0.106\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.6\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d87.0.4280.88 (89e2380a3e36c3464b5dd1302349b1382549290d-refs/branch-heads/4280@{#1761}), userDataDir\u003dC:\\Users\\LENOVO\\AppData\\Local\\Temp\\scoped_dir10640_144435493}, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, platform\u003dXP, proxy\u003dProxy(), goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:64189}, acceptInsecureCerts\u003dfalse, browserVersion\u003d87.0.4280.88, browserName\u003dchrome, javascriptEnabled\u003dtrue, platformName\u003dXP, setWindowRect\u003dtrue, webauthn:virtualAuthenticators\u003dtrue}]\nSession ID: 29f7116531604375dcb8835722f70557\n*** Element info: {Using\u003dcss selector, value\u003ddiv[class\u003d\u0027a-column a-span3 a-text-center icon-container ncd-icon a-declarative\u0027]}\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor11.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:185)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:120)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:416)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:510)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:430)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:408)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy28.isDisplayed(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.elementIfVisible(ExpectedConditions.java:302)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$100(ExpectedConditions.java:44)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:288)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:285)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$23.apply(ExpectedConditions.java:673)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$23.apply(ExpectedConditions.java:669)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:209)\r\n\tat automation.utilities.Utils.elementWait(Utils.java:1320)\r\n\tat automation.stepdefinitions.AddItemsAndSortItemsStepDef.optionsAvailableForTheProduct(AddItemsAndSortItemsStepDef.java:93)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:115)\r\n\tat org.testng.junit.JUnit4TestRunner.start(JUnit4TestRunner.java:82)\r\n\tat org.testng.junit.JUnit4TestRunner.run(JUnit4TestRunner.java:70)\r\n\tat org.testng.TestRunner$1.run(TestRunner.java:675)\r\n\tat org.testng.TestRunner.runJUnitWorkers(TestRunner.java:975)\r\n\tat org.testng.TestRunner.privateRunJUnit(TestRunner.java:706)\r\n\tat org.testng.TestRunner.run(TestRunner.java:607)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:387)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:382)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:340)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:289)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1293)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1218)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1133)\r\n\tat org.testng.TestNG.run(TestNG.java:1104)\r\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:135)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.executeSingleClass(TestNGDirectoryTestSuite.java:112)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.executeLazy(TestNGDirectoryTestSuite.java:123)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.execute(TestNGDirectoryTestSuite.java:90)\r\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:146)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:383)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:344)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:125)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:417)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 1779071000,
  "status": "passed"
});
formatter.before({
  "duration": 9828144900,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "User is on  amazon home page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on home page",
  "keyword": "Given "
});
formatter.match({
  "location": "SearchItemAndLanguageChangingStepDef.userIsOnHomePage()"
});
formatter.result({
  "duration": 798413700,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Add an item to wish list",
  "description": "",
  "id": "add-items-to-wish-list-and-sort-items;add-an-item-to-wish-list;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Amazon"
    },
    {
      "line": 7,
      "name": "@AddItemToWishList"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User search for an item with \"OnePlus\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Verify the product name",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Options available for the product",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "OnePlus",
      "offset": 30
    }
  ],
  "location": "AddItemsAndSortItemsStepDef.userSearchForAnItemWith(String)"
});
formatter.result({
  "duration": 10648569300,
  "status": "passed"
});
formatter.match({
  "location": "AddItemsAndSortItemsStepDef.verifyTheProductName()"
});
formatter.result({
  "duration": 12381223400,
  "status": "passed"
});
formatter.match({
  "location": "AddItemsAndSortItemsStepDef.optionsAvailableForTheProduct()"
});
formatter.result({
  "duration": 90080193500,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for element to be clickable: Proxy element for: DefaultElementLocator \u0027By.cssSelector: div[class\u003d\u0027a-column a-span3 a-text-center icon-container ncd-icon a-declarative\u0027]\u0027 (tried for 90 second(s) with 500 MILLISECONDS interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:80)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:232)\r\n\tat automation.utilities.Utils.elementWait(Utils.java:1320)\r\n\tat automation.stepdefinitions.AddItemsAndSortItemsStepDef.optionsAvailableForTheProduct(AddItemsAndSortItemsStepDef.java:93)\r\n\tat ✽.And Options available for the product(features/AddItemsAndSortItems.feature:11)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"div[class\u003d\u0027a-column a-span3 a-text-center icon-container ncd-icon a-declarative\u0027]\"}\n  (Session info: chrome\u003d87.0.4280.88)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027DESKTOP-LN9R7IR\u0027, ip: \u0027192.168.0.106\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.6\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d87.0.4280.88 (89e2380a3e36c3464b5dd1302349b1382549290d-refs/branch-heads/4280@{#1761}), userDataDir\u003dC:\\Users\\LENOVO\\AppData\\Local\\Temp\\scoped_dir13964_1584609083}, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, platform\u003dXP, proxy\u003dProxy(), goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:64296}, acceptInsecureCerts\u003dfalse, browserVersion\u003d87.0.4280.88, browserName\u003dchrome, javascriptEnabled\u003dtrue, platformName\u003dXP, setWindowRect\u003dtrue, webauthn:virtualAuthenticators\u003dtrue}]\nSession ID: c3eac7261f7ab1c5e5799b18897008d9\n*** Element info: {Using\u003dcss selector, value\u003ddiv[class\u003d\u0027a-column a-span3 a-text-center icon-container ncd-icon a-declarative\u0027]}\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor11.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:185)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:120)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:416)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:510)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:430)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:408)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy28.isDisplayed(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.elementIfVisible(ExpectedConditions.java:302)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$100(ExpectedConditions.java:44)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:288)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:285)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$23.apply(ExpectedConditions.java:673)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$23.apply(ExpectedConditions.java:669)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:209)\r\n\tat automation.utilities.Utils.elementWait(Utils.java:1320)\r\n\tat automation.stepdefinitions.AddItemsAndSortItemsStepDef.optionsAvailableForTheProduct(AddItemsAndSortItemsStepDef.java:93)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:115)\r\n\tat org.testng.junit.JUnit4TestRunner.start(JUnit4TestRunner.java:82)\r\n\tat org.testng.junit.JUnit4TestRunner.run(JUnit4TestRunner.java:70)\r\n\tat org.testng.TestRunner$1.run(TestRunner.java:675)\r\n\tat org.testng.TestRunner.runJUnitWorkers(TestRunner.java:975)\r\n\tat org.testng.TestRunner.privateRunJUnit(TestRunner.java:706)\r\n\tat org.testng.TestRunner.run(TestRunner.java:607)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:387)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:382)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:340)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:289)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1293)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1218)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1133)\r\n\tat org.testng.TestNG.run(TestNG.java:1104)\r\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:135)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.executeSingleClass(TestNGDirectoryTestSuite.java:112)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.executeLazy(TestNGDirectoryTestSuite.java:123)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.execute(TestNGDirectoryTestSuite.java:90)\r\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:146)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:383)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:344)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:125)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:417)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 1949188300,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 18,
  "name": "Sort items by applying filters",
  "description": "",
  "id": "add-items-to-wish-list-and-sort-items;sort-items-by-applying-filters",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@SortItems"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "User search for an item with \"\u003cproductName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "Sort items by applying filters",
  "keyword": "Then "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "add-items-to-wish-list-and-sort-items;sort-items-by-applying-filters;",
  "rows": [
    {
      "cells": [
        "productName"
      ],
      "line": 22,
      "id": "add-items-to-wish-list-and-sort-items;sort-items-by-applying-filters;;1"
    },
    {
      "cells": [
        "Samsung"
      ],
      "line": 23,
      "id": "add-items-to-wish-list-and-sort-items;sort-items-by-applying-filters;;2"
    },
    {
      "cells": [
        "OnePlus"
      ],
      "line": 24,
      "id": "add-items-to-wish-list-and-sort-items;sort-items-by-applying-filters;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 10128887600,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "User is on  amazon home page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on home page",
  "keyword": "Given "
});
formatter.match({
  "location": "SearchItemAndLanguageChangingStepDef.userIsOnHomePage()"
});
formatter.result({
  "duration": 508482000,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Sort items by applying filters",
  "description": "",
  "id": "add-items-to-wish-list-and-sort-items;sort-items-by-applying-filters;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@SortItems"
    },
    {
      "line": 1,
      "name": "@Amazon"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "User search for an item with \"Samsung\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "Sort items by applying filters",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Samsung",
      "offset": 30
    }
  ],
  "location": "AddItemsAndSortItemsStepDef.userSearchForAnItemWith(String)"
});
formatter.result({
  "duration": 10552781900,
  "status": "passed"
});
formatter.match({
  "location": "AddItemsAndSortItemsStepDef.sortItemsByApplyingFilters()"
});
formatter.result({
  "duration": 1741121000,
  "status": "passed"
});
formatter.after({
  "duration": 6133461100,
  "status": "passed"
});
formatter.before({
  "duration": 9397884300,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "User is on  amazon home page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on home page",
  "keyword": "Given "
});
formatter.match({
  "location": "SearchItemAndLanguageChangingStepDef.userIsOnHomePage()"
});
formatter.result({
  "duration": 786740400,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Sort items by applying filters",
  "description": "",
  "id": "add-items-to-wish-list-and-sort-items;sort-items-by-applying-filters;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@SortItems"
    },
    {
      "line": 1,
      "name": "@Amazon"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "User search for an item with \"OnePlus\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "Sort items by applying filters",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "OnePlus",
      "offset": 30
    }
  ],
  "location": "AddItemsAndSortItemsStepDef.userSearchForAnItemWith(String)"
});
formatter.result({
  "duration": 10919225300,
  "status": "passed"
});
formatter.match({
  "location": "AddItemsAndSortItemsStepDef.sortItemsByApplyingFilters()"
});
formatter.result({
  "duration": 1597617600,
  "status": "passed"
});
formatter.after({
  "duration": 1446828000,
  "status": "passed"
});
formatter.uri("features/PinCodeAndPrimeAndCartVerification.feature");
formatter.feature({
  "line": 2,
  "name": "Pincode change and prime benefits and cart verification",
  "description": "",
  "id": "pincode-change-and-prime-benefits-and-cart-verification",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Amazon"
    }
  ]
});
formatter.scenarioOutline({
  "line": 8,
  "name": "Add PinCode To The Address",
  "description": "",
  "id": "pincode-change-and-prime-benefits-and-cart-verification;add-pincode-to-the-address",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@PinCode"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User add \"\u003cpinCode\u003e\" for the address",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Verify the pincode is added or not",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "pincode-change-and-prime-benefits-and-cart-verification;add-pincode-to-the-address;",
  "rows": [
    {
      "cells": [
        "pinCode"
      ],
      "line": 12,
      "id": "pincode-change-and-prime-benefits-and-cart-verification;add-pincode-to-the-address;;1"
    },
    {
      "cells": [
        "500081"
      ],
      "line": 13,
      "id": "pincode-change-and-prime-benefits-and-cart-verification;add-pincode-to-the-address;;2"
    },
    {
      "cells": [
        "500041"
      ],
      "line": 14,
      "id": "pincode-change-and-prime-benefits-and-cart-verification;add-pincode-to-the-address;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 9634892700,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "User is on amazon home page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on home page",
  "keyword": "Given "
});
formatter.match({
  "location": "SearchItemAndLanguageChangingStepDef.userIsOnHomePage()"
});
formatter.result({
  "duration": 565532000,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Add PinCode To The Address",
  "description": "",
  "id": "pincode-change-and-prime-benefits-and-cart-verification;add-pincode-to-the-address;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Amazon"
    },
    {
      "line": 7,
      "name": "@PinCode"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User add \"500081\" for the address",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Verify the pincode is added or not",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "500081",
      "offset": 10
    }
  ],
  "location": "CartOptionAndPrimeAndPinCodeStepDef.userAddForTheAddress(String)"
});
formatter.result({
  "duration": 5413164200,
  "status": "passed"
});
formatter.match({
  "location": "CartOptionAndPrimeAndPinCodeStepDef.verifyThePinCodeIsAddedOrNot()"
});
formatter.result({
  "duration": 5900062500,
  "status": "passed"
});
formatter.after({
  "duration": 1731610900,
  "status": "passed"
});
formatter.before({
  "duration": 10053792100,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "User is on amazon home page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on home page",
  "keyword": "Given "
});
formatter.match({
  "location": "SearchItemAndLanguageChangingStepDef.userIsOnHomePage()"
});
formatter.result({
  "duration": 959828600,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Add PinCode To The Address",
  "description": "",
  "id": "pincode-change-and-prime-benefits-and-cart-verification;add-pincode-to-the-address;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Amazon"
    },
    {
      "line": 7,
      "name": "@PinCode"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User add \"500041\" for the address",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Verify the pincode is added or not",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "500041",
      "offset": 10
    }
  ],
  "location": "CartOptionAndPrimeAndPinCodeStepDef.userAddForTheAddress(String)"
});
formatter.result({
  "duration": 5338652200,
  "status": "passed"
});
formatter.match({
  "location": "CartOptionAndPrimeAndPinCodeStepDef.verifyThePinCodeIsAddedOrNot()"
});
formatter.result({
  "duration": 6051886400,
  "status": "passed"
});
formatter.after({
  "duration": 1304360300,
  "status": "passed"
});
formatter.before({
  "duration": 10171920500,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "User is on amazon home page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on home page",
  "keyword": "Given "
});
formatter.match({
  "location": "SearchItemAndLanguageChangingStepDef.userIsOnHomePage()"
});
formatter.result({
  "duration": 859321400,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Amazon Prime Benefits",
  "description": "",
  "id": "pincode-change-and-prime-benefits-and-cart-verification;amazon-prime-benefits",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 16,
      "name": "@Prime"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "User navigated to prime page",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "Verify the prime benefits",
  "keyword": "Then "
});
formatter.match({
  "location": "CartOptionAndPrimeAndPinCodeStepDef.userNavigatedToPrimePage()"
});
formatter.result({
  "duration": 33570300,
  "error_message": "java.lang.AssertionError: Element Clicked On Try Prime Link was not found in DOM\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat automation.utilities.Asserts.toBeFail(Asserts.java:14)\r\n\tat automation.utilities.Utils.safeClick(Utils.java:960)\r\n\tat automation.stepdefinitions.CartOptionAndPrimeAndPinCodeStepDef.userNavigatedToPrimePage(CartOptionAndPrimeAndPinCodeStepDef.java:81)\r\n\tat ✽.When User navigated to prime page(features/PinCodeAndPrimeAndCartVerification.feature:18)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "CartOptionAndPrimeAndPinCodeStepDef.verifyThePrimeBenefits()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "duration": 2944101000,
  "status": "passed"
});
formatter.before({
  "duration": 10495864000,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "User is on amazon home page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on home page",
  "keyword": "Given "
});
formatter.match({
  "location": "SearchItemAndLanguageChangingStepDef.userIsOnHomePage()"
});
formatter.result({
  "duration": 755347700,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Empty cart verification",
  "description": "",
  "id": "pincode-change-and-prime-benefits-and-cart-verification;empty-cart-verification",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 21,
      "name": "@EmptyCart"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "User navigate to add to cart option in home page",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "Verify the cart in home page",
  "keyword": "Then "
});
formatter.match({
  "location": "CartOptionAndPrimeAndPinCodeStepDef.userNavigateToAddToCartOptionInHomePage()"
});
formatter.result({
  "duration": 4366743300,
  "status": "passed"
});
formatter.match({
  "location": "CartOptionAndPrimeAndPinCodeStepDef.verifyTheCartInHomePage()"
});
formatter.result({
  "duration": 30039156900,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for element to be clickable: Proxy element for: DefaultElementLocator \u0027By.cssSelector: [class\u003d\u0027sc-empty-cart-header\u0027]\u0027 (tried for 30 second(s) with 500 MILLISECONDS interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:80)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:232)\r\n\tat automation.utilities.Utils.elementWait(Utils.java:1320)\r\n\tat automation.stepdefinitions.CartOptionAndPrimeAndPinCodeStepDef.verifyTheCartInHomePage(CartOptionAndPrimeAndPinCodeStepDef.java:71)\r\n\tat ✽.Then Verify the cart in home page(features/PinCodeAndPrimeAndCartVerification.feature:24)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"[class\u003d\u0027sc-empty-cart-header\u0027]\"}\n  (Session info: chrome\u003d87.0.4280.88)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027DESKTOP-LN9R7IR\u0027, ip: \u0027192.168.0.106\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.6\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d87.0.4280.88 (89e2380a3e36c3464b5dd1302349b1382549290d-refs/branch-heads/4280@{#1761}), userDataDir\u003dC:\\Users\\LENOVO\\AppData\\Local\\Temp\\scoped_dir8916_719352919}, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, platform\u003dXP, proxy\u003dProxy(), goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:64790}, acceptInsecureCerts\u003dfalse, browserVersion\u003d87.0.4280.88, browserName\u003dchrome, javascriptEnabled\u003dtrue, platformName\u003dXP, setWindowRect\u003dtrue, webauthn:virtualAuthenticators\u003dtrue}]\nSession ID: 3db4c7ff5027e5b861a491a327db9dfe\n*** Element info: {Using\u003dcss selector, value\u003d[class\u003d\u0027sc-empty-cart-header\u0027]}\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor11.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:185)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:120)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:416)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:510)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:430)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:408)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy28.isDisplayed(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.elementIfVisible(ExpectedConditions.java:302)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$100(ExpectedConditions.java:44)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:288)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:285)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$23.apply(ExpectedConditions.java:673)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$23.apply(ExpectedConditions.java:669)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:209)\r\n\tat automation.utilities.Utils.elementWait(Utils.java:1320)\r\n\tat automation.stepdefinitions.CartOptionAndPrimeAndPinCodeStepDef.verifyTheCartInHomePage(CartOptionAndPrimeAndPinCodeStepDef.java:71)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:115)\r\n\tat org.testng.junit.JUnit4TestRunner.start(JUnit4TestRunner.java:82)\r\n\tat org.testng.junit.JUnit4TestRunner.run(JUnit4TestRunner.java:70)\r\n\tat org.testng.TestRunner$1.run(TestRunner.java:675)\r\n\tat org.testng.TestRunner.runJUnitWorkers(TestRunner.java:975)\r\n\tat org.testng.TestRunner.privateRunJUnit(TestRunner.java:706)\r\n\tat org.testng.TestRunner.run(TestRunner.java:607)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:387)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:382)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:340)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:289)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1293)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1218)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1133)\r\n\tat org.testng.TestNG.run(TestNG.java:1104)\r\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:135)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.executeSingleClass(TestNGDirectoryTestSuite.java:112)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.executeLazy(TestNGDirectoryTestSuite.java:123)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.execute(TestNGDirectoryTestSuite.java:90)\r\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:146)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:383)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:344)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:125)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:417)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded3.png");
formatter.after({
  "duration": 1325309100,
  "status": "passed"
});
formatter.uri("features/SearchAndLanguageChange.feature");
formatter.feature({
  "line": 2,
  "name": "Search product in amazon and language change option",
  "description": "",
  "id": "search-product-in-amazon-and-language-change-option",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Amazon"
    }
  ]
});
formatter.scenarioOutline({
  "line": 8,
  "name": "Search for an Item",
  "description": "",
  "id": "search-product-in-amazon-and-language-change-option;search-for-an-item",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@SearchItem"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "Search for an item with \"\u003cproductName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Verify the items displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "search-product-in-amazon-and-language-change-option;search-for-an-item;",
  "rows": [
    {
      "cells": [
        "productName"
      ],
      "line": 12,
      "id": "search-product-in-amazon-and-language-change-option;search-for-an-item;;1"
    },
    {
      "cells": [
        "Samsung"
      ],
      "line": 13,
      "id": "search-product-in-amazon-and-language-change-option;search-for-an-item;;2"
    },
    {
      "cells": [
        "OnePlus"
      ],
      "line": 14,
      "id": "search-product-in-amazon-and-language-change-option;search-for-an-item;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 9845225400,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "User is on amazon home page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on home page",
  "keyword": "Given "
});
formatter.match({
  "location": "SearchItemAndLanguageChangingStepDef.userIsOnHomePage()"
});
formatter.result({
  "duration": 831873300,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Search for an Item",
  "description": "",
  "id": "search-product-in-amazon-and-language-change-option;search-for-an-item;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Amazon"
    },
    {
      "line": 7,
      "name": "@SearchItem"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "Search for an item with \"Samsung\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Verify the items displayed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Samsung",
      "offset": 25
    }
  ],
  "location": "SearchItemAndLanguageChangingStepDef.searchForAnItemWith(String)"
});
formatter.result({
  "duration": 9885569500,
  "status": "passed"
});
formatter.match({
  "location": "SearchItemAndLanguageChangingStepDef.verifyTheItemsDisplayed()"
});
formatter.result({
  "duration": 1145743400,
  "status": "passed"
});
formatter.after({
  "duration": 1723921300,
  "status": "passed"
});
formatter.before({
  "duration": 9758636900,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "User is on amazon home page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on home page",
  "keyword": "Given "
});
formatter.match({
  "location": "SearchItemAndLanguageChangingStepDef.userIsOnHomePage()"
});
formatter.result({
  "duration": 889923100,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Search for an Item",
  "description": "",
  "id": "search-product-in-amazon-and-language-change-option;search-for-an-item;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Amazon"
    },
    {
      "line": 7,
      "name": "@SearchItem"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "Search for an item with \"OnePlus\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Verify the items displayed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "OnePlus",
      "offset": 25
    }
  ],
  "location": "SearchItemAndLanguageChangingStepDef.searchForAnItemWith(String)"
});
formatter.result({
  "duration": 10687126400,
  "status": "passed"
});
formatter.match({
  "location": "SearchItemAndLanguageChangingStepDef.verifyTheItemsDisplayed()"
});
formatter.result({
  "duration": 793486100,
  "status": "passed"
});
formatter.after({
  "duration": 1483975100,
  "status": "passed"
});
formatter.before({
  "duration": 9981985200,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "User is on amazon home page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on home page",
  "keyword": "Given "
});
formatter.match({
  "location": "SearchItemAndLanguageChangingStepDef.userIsOnHomePage()"
});
formatter.result({
  "duration": 727477100,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Language Settings in amazon",
  "description": "",
  "id": "search-product-in-amazon-and-language-change-option;language-settings-in-amazon",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 16,
      "name": "@LanguageChanging"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "User navigate to language settings",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "Verify the items in language settings",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchItemAndLanguageChangingStepDef.userNavigateToLanguageSettings()"
});
formatter.result({
  "duration": 4781528000,
  "status": "passed"
});
formatter.match({
  "location": "SearchItemAndLanguageChangingStepDef.verifyTheItemsInLanguageSettings()"
});
formatter.result({
  "duration": 445702600,
  "status": "passed"
});
formatter.after({
  "duration": 1665091100,
  "status": "passed"
});
});