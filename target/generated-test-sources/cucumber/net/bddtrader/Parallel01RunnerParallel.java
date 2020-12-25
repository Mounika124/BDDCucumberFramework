package net.bddtrader;


import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import net.serenitybdd.cucumber.CucumberWithSerenity;

@RunWith(CucumberWithSerenity.class)
@CucumberOptions(
strict = true,
features = {"D:/Cucumber_Demo/src/test/resources/features/AddItemsAndSortItems.feature:14"},
plugin = {"json:D:/Cucumber_Demo/target/cucumber-parallel/1.json", "html:D:/Cucumber_Demo/target/cucumber-parallel/1"},
monochrome = false,
glue = {"automation.utilities", "automation.stepdefinitions"})
public class Parallel01RunnerParallel {

}