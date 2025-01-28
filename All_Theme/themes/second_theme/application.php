
/* application.php */

<?php
  echo "<!DOCTYPE html>\n";
  echo "<html lang='en'>\n";
  echo "<head>\n";
  echo "    <meta charset='UTF-8'>\n";
  echo "    <meta name='viewport' content='width=device-width, initial-scale=1.0'>\n";
  echo "    <title>All Applications</title>\n";
  echo "    <link rel='stylesheet' href='styles.css'>\n";
  echo "</head>\n";
  echo "<body>\n";
  echo "<h1>All Applications</h1>\n";

  $applications = [
      ["title" => "Saga CRM", "image" => "assets/images/crm415d09.png", "description" => "CRM helps manage employee data, payroll, attendance, leave applications, recruitment, and performance reviews efficiently within an organization."],
      ["title" => "Saga Nextcloud", "image" => "assets/images/crm415d09.png", "description" => "Next Cloud helps manage employee data, payroll, attendance, leave applications, recruitment, and performance reviews efficiently within an organization."],
      ["title" => "Saga Help Desk", "image" => "assets/images/crm415d09.png", "description" => "Help Desk helps manage employee data, payroll, attendance, leave applications, recruitment, and performance reviews efficiently within an organization."],
      ["title" => "Saga Game Plan", "image" => "assets/images/crm415d09.png", "description" => "Game Plan helps manage employee data, payroll, attendance, leave applications, recruitment, and performance reviews efficiently within an organization."],
      ["title" => "Saga Mail Cow", "image" => "assets/images/crm415d09.png", "description" => "Mail Cow helps manage employee data, payroll, attendance, leave applications, recruitment, and performance reviews efficiently within an organization."],
  ];

  foreach ($applications as $app) {
      echo "<div class='section'>\n";
      echo "    <div class='image-wrapper'>\n";
      echo "      <img src='{$app['image']}' alt='{$app['title']}'>\n";
      echo "    </div>\n";
      echo "    <div class='text-content'>\n";
      echo "      <h2>{$app['title']}</h2>\n";
      echo "      <p>{$app['description']}</p>\n";
      echo "    </div>\n";
      echo "</div>\n";
  }

  echo "</body>\n";
  echo "</html>\n";
?>