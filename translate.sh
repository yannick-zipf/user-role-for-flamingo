#!/usr/bin/env bash
cd ../../tools/i18n/trunk
php makepot.php wp-plugin ../../../user-role-for-flamingo/plugin/user-role-for-flamingo
mv user-role-for-flamingo.pot ../../../user-role-for-flamingo/plugin/user-role-for-flamingo/languages/user-role-for-flamingo.pot
