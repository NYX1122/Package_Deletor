import terminalAsker from 'terminal_asker';

import siblingFolderReader from 'sibling_folder_reader';

import githubManager from 'github_manager';

import fs from 'fs/promises';

export default async function () {
  try {
    const packageToDelete = await terminalAsker(
      'Which package do you want to delete?'
    );

    const packages = await siblingFolderReader();

    if (packages.includes(packageToDelete)) {
      await githubManager('delete', ['NYX1122', packageToDelete]);
      await fs.rm('../' + packageToDelete, { recursive: true });

      console.log('Package_Deletor has successfully deleted the package:');
      console.log(packageToDelete);
    } else {
      throw new Error('The package specified does not exist.');
    }
  } catch (error) {
    console.error('Package_Deletor has encountered an error:');
    console.error(error);
  }
}
