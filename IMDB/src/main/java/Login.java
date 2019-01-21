import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class Login {

  public static void login (WebDriver mydriver) {
    mydriver.findElement(By.id("imdb-signin-link")).click();
    ((FirefoxDriver) mydriver).findElementByXPath("/html/body/div[2]/div[1]/div[2]/div[1]/div[1]/div/div[1]/a[1]").click();

    ((FirefoxDriver) mydriver).findElementById("ap_email").sendKeys("csaszari.noemi@gmail.com");
    ((FirefoxDriver) mydriver).findElementById("ap_password").sendKeys("Budapest1");

    mydriver.findElement(By.id("signInSubmit")).click();
  }
}
