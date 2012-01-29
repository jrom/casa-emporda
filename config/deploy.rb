set :application, "casa-emporda"
set :repository,  "git@github.com:jrom/casa-emporda.git"
set :deploy_to, "/home/jordi/apps/casa-emporda"
set :deploy_via, :remote_cache
set :branch, "master"

set :user, "jordi"

set :use_sudo, false
ssh_options[:forward_agent] = true

set :scm, :git

role :web, "casa-emporda.com"
role :app, "casa-emporda.com"
role :db,  "casa-emporda.com", :primary => true

namespace :deploy do
  task :start do ; end
  task :stop do ; end
end

